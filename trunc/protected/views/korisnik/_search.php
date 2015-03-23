<?php
/* @var $this KorisnikController */
/* @var $model Korisnik */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'idKorisnik'); ?>
		<?php echo $form->textField($model,'idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'korisnickoIme'); ?>
		<?php echo $form->textField($model,'korisnickoIme',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'sifra'); ?>
		<?php echo $form->textField($model,'sifra',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'email'); ?>
		<?php echo $form->textField($model,'email',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'tip'); ?>
		<?php echo $form->textField($model,'tip',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'aktivan'); ?>
		<?php echo $form->textField($model,'aktivan'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'banovan'); ?>
		<?php echo $form->textField($model,'banovan'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->