<?php
/* @var $this PrivatnaPorukaController */
/* @var $model PrivatnaPoruka */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'idPrivatnaPoruka'); ?>
		<?php echo $form->textField($model,'idPrivatnaPoruka'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'vrijemeSlanja'); ?>
		<?php echo $form->textField($model,'vrijemeSlanja'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'naslov'); ?>
		<?php echo $form->textField($model,'naslov',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'poruka'); ?>
		<?php echo $form->textArea($model,'poruka',array('rows'=>6, 'cols'=>50)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Korisnici_idKorisnik'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Korisnici_idKorisnik1'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik1',array('size'=>60,'maxlength'=>128)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->