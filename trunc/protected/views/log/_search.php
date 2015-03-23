<?php
/* @var $this LogController */
/* @var $model Log */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'idLog'); ?>
		<?php echo $form->textField($model,'idLog'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'vrijemeLogiranja'); ?>
		<?php echo $form->textField($model,'vrijemeLogiranja'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'ipAdresa'); ?>
		<?php echo $form->textField($model,'ipAdresa',array('size'=>15,'maxlength'=>15)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Korisnici_idKorisnik'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->