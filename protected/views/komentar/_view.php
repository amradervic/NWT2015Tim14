<?php
/* @var $this KomentarController */
/* @var $data Komentar */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idKomentar')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idKomentar), array('view', 'id'=>$data->idKomentar)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('tekst')); ?>:</b>
	<?php echo CHtml::encode($data->tekst); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('vrijemeObjave')); ?>:</b>
	<?php echo CHtml::encode($data->vrijemeObjave); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Recenzija_idRecenzija')); ?>:</b>
	<?php echo CHtml::encode($data->Recenzija_idRecenzija); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Korisnici_idKorisnik')); ?>:</b>
	<?php echo CHtml::encode($data->Korisnici_idKorisnik); ?>
	<br />


</div>